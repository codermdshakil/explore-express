
const cors = require('cors')
const morgan = require('morgan')
const router = require('express').Router();

const { homeController, aboutController, aboutsController, helpController, middlewareController} = require('./controller')

router.get('/',homeController );

// use a specific middleware
router.get('/about', aboutController);

// when we need multiple middleware we can simply use array
router.get('/abouts', aboutsController)

router.get('/help', helpController);


// use localmiddleware in specific route. Just give name of local middleware don't call it
router.get('/middleware',middlewareController)

module.exports = router;
