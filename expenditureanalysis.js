function calculateTotalSpentByCategory(transactions) {
    
    let record = [];

    if (transactions.length === 0) {
        return [];
    }

    transactions.forEach(transaction => {
        const matchingRecord = record.find(res => res.category === transaction.category);
       

        if (matchingRecord) {
            const transactionPrice = transaction.price;

            if ((transactionPrice)) {
                matchingRecord.totalSpent += transactionPrice;
            }
        } else {
         
            const transactionPrice =transaction.price;
            record.push({
                category: transaction.category,
                totalSpent: transactionPrice,
            });

           
        }
    });

    return record;


  

    

    
  }

  module.exports = calculateTotalSpentByCategory;