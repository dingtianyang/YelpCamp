var mongoose   = require("mongoose"),
	Campground = require("./models/campground"),
	Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id magni error ullam sed, eligendi provident quas, ex eum! Necessitatibus assumenda architecto dignissimos, repellat natus soluta repudiandae maiores nisi magnam ipsam, consectetur fuga ex dolorem nihil eaque. Facilis voluptate aperiam pariatur delectus! Tempore quisquam sunt expedita ipsum cupiditate magnam voluptates ipsa unde inventore quas harum magni ratione in veniam, accusantium, labore perspiciatis corporis. Tenetur animi tempore quae laborum repudiandae autem nisi neque officia ducimus accusantium nemo vitae sequi asperiores voluptatem iusto laudantium laboriosam doloremque atque velit ratione, labore optio! Quaerat voluptatem, quod similique, ipsam aliquid eligendi rem nobis et. Excepturi, aliquid!"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quibusdam quam, unde culpa reprehenderit eaque ad? Ipsum sequi tempora necessitatibus error voluptatibus vitae recusandae corporis enim earum. Itaque, accusamus, placeat totam nesciunt quis possimus architecto maxime explicabo blanditiis eius laborum maiores libero nostrum saepe suscipit voluptatum accusantium reprehenderit ea officia rem voluptatem. Inventore voluptatibus molestias adipisci delectus, consequatur dolores ipsam numquam officia enim eius, modi, laboriosam velit! Nisi debitis deserunt libero autem officiis! Ad possimus vel, accusamus deserunt autem similique earum adipisci culpa ut repudiandae voluptatibus dignissimos temporibus totam aut inventore nostrum id veritatis saepe. Voluptatibus magni quas natus fuga eum. Quis voluptatum maxime placeat veniam accusamus, et error aliquam molestiae? Beatae totam, explicabo dicta animi debitis quis necessitatibus officia pariatur dolore similique iusto omnis neque nesciunt distinctio facere suscipit provident autem ipsum maiores quidem delectus odit ea, itaque eveniet eum. Fugiat aliquam hic, quo id. Sed excepturi natus cupiditate."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam excepturi maxime beatae ad natus, est ducimus facere voluptate dicta voluptatem non atque magni assumenda perspiciatis magnam aperiam. Repellendus magni natus non ipsa nobis mollitia dolorum accusantium nostrum hic fuga in porro nisi, quos explicabo, nesciunt pariatur tempora quod eum. Minima!"
    }
]

function seedDB(){
	//Remove all campgrounds
	Campground.deleteMany({}, function(err){
		if (err) {
			console.log(err);
		}
		console.log("removed campgrounds!");
		//add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if (err) {
					console.log(err);
				} else {
					console.log("added a campground!");
					//create a comment
					Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Tianyang"
						}, function(err, comment){
							if (err) {
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment");
							}	
						});
				}
			})
		});
	});
}

module.exports = seedDB;
