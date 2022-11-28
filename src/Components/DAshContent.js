import { Routes, Route } from 'react-router-dom';

export default function DAshContent() {
  return (
    <div>
      <Routes>
            <Route path="/home" element ={<div>Home content</div>}></Route>
            <Route path="/dashb" element ={<div>DashB content</div>}></Route>
            <Route path="/userl" element ={<div>UserList content</div>}></Route>
            <Route path="/profile" element ={<div>Profile content</div>}></Route>
        </Routes>
    </div>
  )
}
