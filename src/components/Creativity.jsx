// "use client"
// import React, { useState } from 'react'

// function Creativity() {
//   const [uploadImg, setUploadImg] = useState([])
//   const handlerChange = (e) => {
//   const image = URL.createObjectURL(e.target.files[0])
//   setUploadImg([...uploadImg, image])
//   }
//   const removeImage = (i) => {
//     setUploadImg(uploadImg.filter((_,index) => i !== index))
//   }
//   return (
//     <div>
//       <label htmlFor="imgUpload">upload</label>
//       <input onChange={(e) => handlerChange(e)} hidden id='imgUpload' type="file" />
//       <div>
//         {uploadImg.map((img, index) => (
//           <div key={index}>
//           <button onClick={() => removeImage(index)}>X</button>
//             <img src={img} alt="image" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Creativity

// "use client"
// import React, { useState } from 'react'

// function Creativity() {
//   const submitHandler = (e) => {
//     e.preventDefault()
//     setError(true)
//   }
//   const [button, setButton] = useState(0)
//   const btn = () => {
//     setButton(button + 1)
//   }
//   const formData = {
//     email: "",
//     password: "",
//   }
//   const [error, setError] = useState(false)
//   const [value, setValue] = useState(formData)

//   return (
//     <div>
//       <form className='flex flex-col' onSubmit={submitHandler}>
//         <input onChange={(e) => setValue({ ...value, email: e.target.value })} value={value.email} placeholder='email' type="email" />
//         {error && !value.email ? (<p className='text-red-300'>email required</p>) : ""}
//         <input onChange={(e) => setValue({ ...value, password: e.target.value })} value={value.password} placeholder='password' type="password" />
//         {error && !value.password ? (<p className='text-red-400'>required password</p>) : error && value.password.length < 6 && !value.length > 0 ? (<p className='text-red-400'>password 6 creactors</p>) : ""}
//         <button type='submit'>submit</button>
//       </form>
//       <button onClick={btn}>submit</button>
//       <p>{button}</p>
//     </div>
//   )
// }

// export default Creativity