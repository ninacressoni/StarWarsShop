import {GET_ITEMS,  ADD_ITEMS, DELETE_ITEM, TOGGLE_NAV,
    CLOSE_NAVBAR, BANNER_CLOSE, INCREASE_ITEM, DECREASE_ITEM, 
    TOTAL_ITEMS, DETAILS
} from '../actions/types';

const initialState = {
    items:[ {
        _id:1,
        img:'images/lightsaber.png',
        title:'Light Saber',
        price:'570',
        category:'weapon',
        details:'Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
        count:1,
        isInCart: false
    },

    {
        _id:2,
        img:'images/blaster.png',
        title:'Rifle Blaster F-11D',
        price:'630',
        category:'weapon',
        details:'The blaster rifle was the successor to BlasTechs E-10 blaster rifle and was based on the DC-15A blaster carbine used by clone troopers during the Clone Wars.',
        count:1,
        isInCart: false
    },

    {
        _id:3,
        img:'images/x-wing.png',
        title:'X-Wing',
        price:'3520',
        category:'spacecraft',
        details:'Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
        count:1,
        isInCart: false
    },

    {
        _id:4,
        img:'images/tie-fighter.png',
        title:'Tie-Fighter',
        price:'4100',
        category:'spacecraft',
        details:'Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
        count:1,
        isInCart: false
    },

    {
        _id:5,
        img:'images/millenium-falcon.png',
        title:'Millenium Falcon',
        price:'7200',
        category:'spacecraft',
        details:'Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
        count:1,
        isInCart: false
    },

    {
        _id:6,
        img:'images/c3po.png',
        title:'C3PO',
        price:'10350',
        category:'robot',
        details:'Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
        count:1,
        isInCart: false
    },

    {
        _id:7,
        img:'images/r2d2.png',
        title:'R2D2',
        price:'9530',
        category:'robot',
        details:'Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
        count:1,
        isInCart: false
    },

    {
        _id:8,
        img:'images/bb8.png',
        title:'BB8',
        price:'9740',
        category:'robot',
        details:'Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.',
        count:1,
        isInCart: false
    },
],
cart:[],
isOpen:false,
total:0,
shipping:10
}

const Todos = (state=initialState, action)=>{
 
    switch(action.type){
     
        // get initial state
        case GET_ITEMS:
            return{
                ...state
            }

    //    toggle navigation fro appearing
    case TOGGLE_NAV:
        return{
            ...state,
            isOpen:!state.isOpen
        }

        // close navbar if it is open
      case CLOSE_NAVBAR:
          
      if(state.isOpen===true){
          return{
              ...state,
              isOpen:false
          }
      }

      
    
    //   add items to cart
    case ADD_ITEMS:

    let check =state.cart.find(item=>item._id===action.payload);
   
    if(!check){
        // bringing only the ites that match the id
        let items = state.items.filter(item=>item._id===action.payload);
        let itemsCart = [...state.cart, ...items]

        return{
            ...state,
            cart:itemsCart
        }
    }

    else{
        let items = state.items.filter(item=>item._id===action.payload);

        items.forEach(item=>{
            item.isInCart=true
            // alert(`already in cart`)
        })

        return{
            ...state
        }
    }

    // for closing banner after specific time
    case BANNER_CLOSE:
        state.items.forEach(item=>{
            item.isInCart=false
        })

        return{
            ...state
        }


        // delete item
        case DELETE_ITEM:
        
        const filteredCart = state.cart.filter(item=>item._id!==action.payload);
        
        return{
          ...state,
          cart:filteredCart
        } 
        
        
        // increasing ites inside cart
        case INCREASE_ITEM :
      
         let incResults = state.cart.map(item=>{
             if(item._id===action.payload){
                 item={...item, count:item.count +1}
             }
             return item
         })

        return{
            ...state,
            cart:incResults

        }

        // decrease item inside the cart
        case DECREASE_ITEM:
            
        let decResults = state.cart.map(item=>{
            if(item._id===action.payload){
                item={...item, count:item.count===1 ?item.count=1:item.count - 1}
            }
            return item;
        })

        return{
           ...state,
           cart:decResults

            }

        //get total price 
       case TOTAL_ITEMS:

         const totals = state.cart.reduce((prev, item)=>{
           return prev + (item.price * item.count)
         },0)

        return{
            ...state,
            total:totals
        }
      

    case DETAILS:
        
        return{
            ...state
        }
    







    

     default:
          return state

    }



}


export default Todos;