const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const {v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override");
const jwt = require('jsonwebtoken');
const config = require('./config');
const secretKey = config.jwtSecretKey;


app.use(methodOverride('_method'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set("view engine", "views");
app.set("views", path.join(__dirname, "/views"));


const users = [];

const sellers = [
    {
        seller_id : uuidv4(),
        name : "David",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Ibrahim",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Rahul",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Raj",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Rajesh",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Amaal",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Mithun",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Prince",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Soham",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Abram",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Yogesh",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    },
    {
        seller_id : uuidv4(),
        name : "Rajkummar",
        items : [
            "Name = Mobile, Price = Rs.50,000", "Name = Apple, Price = Rs.600", "Name = Headphones, Price = Rs.800", "Name = Earrings, Price = Rs.567", "Name = Diamond bracelet, Price = Rs.80,000", 
            "Name = Azure Laptop, Price = Rs.70,000","Name = Diapers, Price = Rs.700", "Name = Water bottle, Price = Rs.709", "Name = Chocolates, Price = Rs.890", 
            "Name = Video game, Price = Rs. 3000", "Name = Maths Book, Price = 1001", "Name = Adidas bag, Price = Rs.7000"
            ],
    }
];


//Register Form'//
app.get('/api/auth/register', (req, res) => {
    res.render('register.ejs');
  });

app.post('/api/auth/register', (req, res) => {
    const { username, password, userType } = req.body;
    if (!username || !password || !userType) {
      return res.status(400).json({ error: 'Invalid request format' });
    }
    const user = {
      username,
      password,
      userType,
    };

    users.push(user);
    console.log(user);
    res.status(201).json({ message: 'User registered successfully', user });
  });


//Login Form
  app.get('/api/auth/login', (req, res) => {
    res.render("login.ejs");
  });

//Login endpoint
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const token = jwt.sign({ username: user.username, userType: user.userType }, 'hashcode', {
    expiresIn: '1h', // Token expiration time 
  });

  res.status(200).json({ message: 'Login successful', token });
});

// Below Are For Buyers Perspective//

//List Sellers
app.get("/buyer/list-of-sellers", (req, res) => {
    res.render("index.ejs", {sellers});
});

// Route handler for GET /api/buyer/seller-catalog/:seller_id
app.get('/api/buyer/seller-catalog/:seller_id', (req, res) => {
    const sellerId = req.params.seller_id;
    const seller = sellers.find((seller) => seller.seller_id === sellerId);
  
    if (seller) {
      res.render('catalog.ejs', { seller });
    } else {
      res.status(404).json({ error: 'Seller not found' });
    }
});



// Route for Order list by Buyer
app.post("/api/buyer/create-order/:seller_id", (req, res) => {
    const sellerId = req.params.seller_id;
    const selectedSeller = sellers.find((seller) => seller.seller_id === sellerId);
    const selectedItems = req.body.items || [];

    const order = {
        seller: selectedSeller,
        items: selectedItems.map(item => ({ name: item })),
    };
    res.render("order.ejs", { order });
});

// Below Are For Sellers Perspective//
app.route("/api/seller/create-catalog")
    .get((req, res) => {
        res.render("create-catalog.ejs");
    })
    .post((req, res) => {
        const { name, items } = req.body;
        console.log("Received items:", items);
        const newSeller = {
            seller_id: uuidv4(),
            name: name,
            items: (Array.isArray(items) ? items : [items]).map(item => ({ name: item })),
        };

        console.log("New Seller:", newSeller);
        sellers.push(newSeller);

        res.status(201).json({ message: "Catalog created successfully", seller: newSeller });
        console.log(newSeller);
    });

    
    // Route handler for retrieving all orders received by a seller
    app.get('/api/seller/orders', (req, res) => {
        const sellerId = req.query.seller_id; // Assuming you pass seller_id as a query parameter
        const sellerOrdersList = sellerOrders.filter(order => order.seller.seller_id === sellerId);
        res.status(200).json({ orders: sellerOrdersList });
    });


app.listen(port, () => {
    console.log(`App is listening in port number ${port}`);
});
