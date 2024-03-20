from rule_engine.condition import Condition
from rule_engine.action import Action
from rule_engine.fact import Fact
import rule_engine

from typing import Any,List
from functools import reduce

class Rule:
    def __init__(self,condtion:Condition,action:Action):
        self.conditions = [condtion]
        self.actions = [action]

    def add_condition(self,condition:Condition) -> None:
        self.conditions.append(condition)

    def add_action(self,action:Action) -> None:
        self.actions.appen(action)

    def evaluate(self, facts: List[Fact]) -> Any:
        def fact_generator(conditions: List[Condition], facts:List[Fact]):
            all_conditions_true = True
            for fact in facts:
                results = map(lambda condition: condition.eval_func(fact), conditions)
                all_conditions_true = reduce(lambda x, y: x and y, results)

                if all_conditions_true:
                    yield fact

        true_facts = list(fact_generator(self.conditions, facts))

        if len(true_facts) > 0:
            for fact in true_facts:
                for action in self.actions:
                    action.exec_func(fact)