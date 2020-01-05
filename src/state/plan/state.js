export interface PlanState {
selectedDay: number ,
planContent: Object,
selectedDayContent: Object
}

export const PlanInitialState: PlanState = {
  selectedDay: 1 , 
  planContent : {},
  selectedDayContent:{}
};
