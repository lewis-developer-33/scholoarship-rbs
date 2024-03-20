
from rule_engine.fact import Fact
from rule_engine.condition import Condition
from rule_engine.action import Action
from rule_engine.rule import Rule

age_cond = Condition(name="Age>=21", evaluation_function=lambda fact: fact.age >= 21)
occupation_cond = Condition(name="Occupation==Software Developer", evaluation_function=lambda fact: fact.occupation == "Software Developer")

print_action = Action(name="Print Fact", execution_function=lambda fact: print("Name: {} Age: {} Occupation: {}".format(fact.name, fact.age, fact.occupation)))

john = Fact(age=25,name="John Brown", occupation="Software Developer")
sarah = Fact(age=35,name="Sarah Purple", occupation="Data Engineer")
barry = Fact(age=27, name="Barry White", occupation="Software Developer")

rule = Rule(condition=age_cond, action=print_action)
rule.add_condition(occupation_cond)

rule.evaluate([john, sarah, barry])