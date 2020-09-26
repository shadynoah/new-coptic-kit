
import {
    ContentInitialState
} from "../state/content/state";
import { PlanInitialState } from '../state/plan/state'
 import { AgbyaInitialState } from '../state/agbya/state';
export type State = {
    content: ContentInitialState,
    plan: PlanInitialState,
    agbya: AgbyaInitialState

};
