import { List } from "components/List/List";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const ExpenseList = useSelector((store) => store.EXPENSE.expenseList);

  return <List items={ExpenseList} />;
};

export default ExpenseList;
