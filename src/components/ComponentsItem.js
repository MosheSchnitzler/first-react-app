import './ComponentsItem.css';
import ExpenseDate from './ExpenseDate';

function ComponentsItem(props){

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date}/>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
		</div>
	)
}

export default ComponentsItem;