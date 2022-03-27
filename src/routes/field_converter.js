import FIELDS from './field_match'
import FIELDS_INVERTED from './field_match_inverted'

function convertKeys({ toChange, API }){
  let res = {}
  if(!API){
    for(let key in toChange){
      res[FIELDS[key]] = toChange[key]
    }
  } else {
    for(let key in toChange){
      res[FIELDS_INVERTED[key]] = toChange[key]
    }
  }
  return res
}
    
    
export default convertKeys