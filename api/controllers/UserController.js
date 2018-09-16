/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


    /**
     * It will create a new user .
     */
    create: function (req, res) {
     
  
      let firstName = req.param('first_name'),
          lastName = req.param('last_name'),
          age = req.param('age');
  
       if(!firstName){
         return res.badRequest({err:'Invalid first_name'});
       }
  
       if(!lastName){
         return res.badRequest({err:'Invlaid last_name'});
       }
  
       User.create({
        first_name : firstName,
        last_name : lastName,
        age:age
       }).exec((error, result) => {
        if (error) {
            return res.serverError(error);
          }
        
          // would you look at all those zookeepers?
          return res.json(result);
      });
    }
  };