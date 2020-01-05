
import {
    ContentInitialState
} from "../state/content/state";
import { PlanInitialState } from '../state/plan/state'
 
export type State = {
    content: ContentInitialState,
    plan: PlanInitialState

};
