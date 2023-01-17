import smartpy as sp

class CrowdFunding(sp.Contract):
    def _init_(self):
        self.init(projects = sp.map(
        tkey=sp.TAddress,
        tvalue=sp.TRecord(
        goalAmount = sp.TMutez,
        contributeAmount = sp.TMutez,
        endTime = sp.TTimestamp,
        name = sp.TString,
        description = sp.TString)))
    
    @sp.entry_point
    def add_project(self, description, name, endTime, goalAmount):
        self.data.projects[sp.sender] = sp.record(
                                                description=description,
                                                name = name,
                                                goalAmount = goalAmount,
                                                contributeAmount = sp.tez(0),
                                                endTime = endTime)

    @sp.entry_point
    def default(self):
        pass

    @sp.entry_point
    def send_funds(self, amount):
        goalAmount = self.data.projects[sp.sender].goalAmount
        contributeAmount = self.data.projects[sp.sender].contributeAmount
        sp.verify(goalAmount >= contributeAmount + amount)
        self.data.projects[sp.sender].contributeAmount += amount
        sp.send(sp.self_address, amount, message="Money transferred to contract")

    @sp.entry_point
    def transfer_to_owner(self):
        goalAmount = self.data.projects[sp.sender].goalAmount
        contributeAmount = self.data.projects[sp.sender].contributeAmount
        sp.if goalAmount == contributeAmount:
            sp.send(sp.sender, goalAmount, message="Credited to project owner")

    @sp.add_test(name = "Crowdfunding")
    def test():
        bob = sp.test_account("bob")
        alice = sp.test_account("alice")
        c1 = CrowdFunding()
        scenario = sp.test_scenario()
        scenario.h1("Store Value")
        scenario += c1
        c1.add_project(name="Hello", description="Hello World", endTime = sp.timestamp_from_utc(2022, 10, 29, 4, 45, 39), goalAmount = sp.tez(10)).run(sender=bob)
        c1.send_funds(sp.tez(5)).run(sender=bob, amount=sp.tez(5))
    sp.add_compilation_target("CrowdFunding", CrowdFunding())