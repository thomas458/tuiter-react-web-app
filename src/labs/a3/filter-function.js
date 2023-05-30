function FilterFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    numberArray1.push(6);
    numberArray1.splice(2, 1);

    const numberGreaterThan2 = numberArray1
        .filter(a => a > 2);
    const evenNumbers = numberArray1
        .filter(a => a % 2 === 0);
    const oddNumbers = numberArray1
        .filter(a => a % 2 !== 0);

    return(
      <>
          <h3>Filter function</h3>
          numbersGreaterThan2 = { numberGreaterThan2 }<br/>
          evenNumbers = { evenNumbers }<br/>
          oddNumbers = { oddNumbers }<br/>
      </>
    );

}
export default FilterFunction