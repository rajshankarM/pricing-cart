import React from 'react';

export default function Header(props){
    const {countCartItems} = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Pricing Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">

                 Cart  { ' '} 
                 {countCartItems? (
                     <button className="badge">{countCartItems}</button>
                 ):(
                     ''
                 )
                }
                 
                 </a> <a href="#/SignIn"></a>
            </div>
        </header>
    )
}

// import React from 'react';

// export default function Header(props) {
//   return (
//     <header className="block row center">
//       <div>
//         <a href="#/">
//           <h1>Small Shopping Cart</h1>
//         </a>
//       </div>
//       <div>
//         <a href="#/cart">
//           Cart{' '}
//           {props.countCartItems ? (
//             <button className="badge">{props.countCartItems}</button>
//           ) : (
//             ''
//           )}
//         </a>{' '}
//         <a href="#/signin"> SignIn</a>
//       </div>
//     </header>
//   );
// }