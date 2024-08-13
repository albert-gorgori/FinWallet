'use client'
import CountUp from "react-countup";

const AnimatedCunter = ({amount}: {amount: number}) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="." duration={2.75} prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCunter;
