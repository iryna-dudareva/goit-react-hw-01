import React from 'react'
import css from './TransactionHistory.module.css'


const TransactionHistory = ({items}) => {
  return (
      <table className={css.transaction_table}>
  <thead>
              <tr className={css.table_header}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
              {items.map((item, index) => { 
                  return (
                      <tr key={item.id} className={index % 2 === 0 ? css.even_row : css.odd_row}>
                          <td>{item.type}</td>
                          <td>{item.amount}</td>
                          <td>{item.currency}</td>
                    </tr>
                  )
              })}
  </tbody>
</table>

  )
}

export default TransactionHistory