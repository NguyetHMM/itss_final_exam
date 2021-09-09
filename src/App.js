
import './App.css';
import useArr  from './hooks/useArr';

function App() {

  const studentArr = ['Huyen', 'Hoa', 'Hung', 'Long']
  const  [selectedItem, selectedIndex, handleChange, findSelectedIndex, printArr] = useArr(studentArr)

  return (
      <div className="App">
        <div>学生一覧：{printArr()}</div>
        <div>探索名前：<input type="text" onChange={handleChange}></input></div>
        <button onClick={findSelectedIndex}>確定</button>
        <div>探索名前：{selectedItem}</div>
        <div>位置: {selectedIndex}</div>
      </div>
  );
}

export default App;
