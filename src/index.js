module.exports = function toReadable (number) {
   const arrayOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   const array10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const array20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   number = number.toString();
   let res = '';
   switch (number.length) {
      case 1:
         res = arrayOne.find((num, index) => index == number[0])
         break;
      case 2:
         if (number[0] === '1') res = array10_19.find((num, index) => index == number[1]);
         if (number[0] !== '1') {
            res = array20_90.find((num, index) => index == number[0]);
            res += ' ' + arrayOne.find((num, index) => index == number[1]);
            res = res.split(' ').filter(item => item !== 'zero').join(' ')
         }
         break;
      case 3:
         if ((number[0] !== '0') && (number[1] === '0') && (number[2] == '0')) {
            res = arrayOne.find((num, index) => index == number[0]) + ' ' + 'hundred';
         } else if ((number[0] !== '0') && (number[1] === '1')) {
            console.log(number)
            res = arrayOne.find((num, index) => index == number[0]) + ' ' + 'hundred';
            res += ' ' +array10_19.find((num, index) => index == number[2]);
            res = res.split(' ').filter(item => item !== 'zero').join(' ')
         } else if ((number[0] !== '0') && (number[1] !== '1')) {
            console.log(number)
            res = arrayOne.find((num, index) => index == number[0]) + ' ' + 'hundred';
            res += ' ' + array20_90.find((num, index) => index == number[1]);
            res+= ' ' + arrayOne.find((num, index) => index == number[2]);

            res = res.split(' ').filter(item => item !== 'zero' && item !== '').join(' ')
         } 
         break;

      default:
         break;
   }
   return res
}
