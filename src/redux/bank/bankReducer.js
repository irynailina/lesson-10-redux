import types from "./types";

// export const balanceIncrementAction = (summ) => ({
//   type: types.BALANCE_INCREMENT,
//   payload: { summ },
// });

// export const userInitAction = () => ({
//   type: types.BANK_INIT_USER,
// });

const balanceReducer = (state = 10000, { type, payload }) => {
  switch (type) {
    case types.BALANCE_INCREMENT:
      return state + payload.summ;
    case types.BANK_INIT_USER:
      return state + 9;
    case types.BALANCE_DECREMENT:
      return state - payload.summ;

    default:
      return state;
  }
};

const userReducer = (
  state = {
    name: "Ira",
    uniqueId: "fefrkjhkjp",
    key: "1565468868453",
    isInit: true,
    bonus: 0,
  },
  { type, payload }
) => {
  switch (type) {
    case types.BANK_INIT_USER:
      return { ...state, isInit: !state.isInit };
    case types.USER_LOYALTY_PROGRAMM:
      return { ...state, bonus: state.bonus + payload.bonus };
    default:
      return state;
  }
};

export { balanceReducer, userReducer };
