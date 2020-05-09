export interface PlanState {
selectedDay: number ,
planContent: Object,
selectedDayContent: Array,
checkedListOfDays : Array,
selectedChapterIndex: Number,
ArabicPlanContent: {},
listOfCompletedDaysObj:{},
arabicListOfCompletedDaysObj:{}
}

export const PlanInitialState: PlanState = {
  selectedDay: 1 , 
  planContent : {},
  selectedDayContent:[],
  checkedListOfDays:[],
  selectedChapterIndex : 0,
  ArabicPlanContent :{},
  listOfCompletedDaysObj:{},
  arabicListOfCompletedDaysObj:{}
};
