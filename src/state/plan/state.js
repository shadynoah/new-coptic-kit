export interface PlanState {
selectedDay: number ,
planContent: Object,
selectedDayContent: Object,
checkedChaptersIndexes: Array,
checkedListOfDays : Array
}

export const PlanInitialState: PlanState = {
  selectedDay: 1 , 
  planContent : {},
  selectedDayContent:{},
  checkedChaptersIndexes:[],
  checkedListOfDays:[]
};
