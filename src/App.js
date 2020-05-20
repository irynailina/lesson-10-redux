import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  balanceIncrementAction,
  balanceDecrementAction,
  userInitAction,
  loyaltyProgramm,
} from "./redux/bank/bankAction";
import Travel from "./components/travel/Travel";

const bonus = {
  bronse: {
    lavel: 1000,
    discount: 2,
  },
  gold: {
    level: 3000,
    discount: 5,
  },
  vip: {
    level: 7000,
    discount: 10,
  },
};


const bonusPlus = (summ) => {
  if (summ < bonus.bronse.level) {
    return (summ * bonus.bronse.discount) / 100;
  } else if (summ > bonus.bronse.level && summ < bonus.gold.level) {
    return (summ * bonus.gold.discount) / 100;
  } else if (summ > bonus.gold.level && summ < bonus.vip.level) {
    return (summ * bonus.gold.discount) / 100;
  } else if (summ > bonus.vip.level) {
    return (summ * bonus.vip.discount) / 100;
  }
};

const replenishedCard = 999;

function App({
  balance,
  name,
  balanceIncrementAction,
  balanceDecrementAction,
  loyaltyProgramm,
}) {
  useEffect(() => {
    userInitAction();
  }, []);

  const decrement = () => {
    const buyShop = Math.floor(Math.random() * 10000);
    console.log(buyShop);
    balanceDecrementAction(buyShop);
    const countBonus = bonusPlus(buyShop);
    if (balance > 0) {
      loyaltyProgramm(countBonus);
    }
  };

  return (
    <>
      <button onClick={() => balanceIncrementAction(replenishedCard)}>
        PLUS
      </button>
      <p>client {name}</p>
      <h2>balance: {balance}</h2>
      <button onClick={decrement}>MINUS</button>
      <Travel />
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    balance: state.balance,
    name: state.user.name,
  };
};

const mapDispatchToProps = {
  balanceIncrementAction,
  userInitAction,
  loyaltyProgramm,
  balanceDecrementAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// dispatchEvent({
//   type: 'balance_plus',
//   payload: 100
// })
