export const defaultState = {
	sessionNum: 0,
	numQuestions: 0,
	fontSize: "medium",
	questionAns: "",
	questionAnsSum: "",
	questions: "",
	questionSum: "",
	Connect_pic_therefore_B: {
		text: "Our school football team won the game; ________ our school got a prize.",
		text1: "Our school football team won the game; ",
		text2: " our school got a prize.",
		choice: ["on the other hand", "yet", "however", "therefore"],
		answer: 4,
		picture1: require("../Site/Images/Connect_pic_therefore_B_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_therefore_B_2.jpg"),
		audio: "../Site/audio/Connect_pic_therefore_B.mp3",
	},
	Connect_pic_whereas_B: {
		text: "A ladybug has 6 legs,________ a centipede has 100 legs.",
		text1: "A ladybug has 6 legs, ",
		text2: " a centipede has 100 legs.",
		choice: ["likewise", "whether", "whereas", "moreover"],
		answer: 3,
		picture1: require("../Site/Images/Connect_pic_whereas_B_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_whereas_B_2.jpg"),
		audio: "../Site/audio/Connect_pic_whereas_B.mp3",
	},
	Connect_pic_asaresult: {
		text: "Kim was sick. ________ she stayed home and did not go to school.",
		text1: "Kim was sick.",
		text2: " she stayed home and did not go to school.",
		choice: ["otherwise", "yet", "in contrast", "as a result"],
		answer: 4,
		picture1: require("../Site/Images/Connect_pic_asaresult_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_asaresult_2.jpg"),
		audio: "../Site/audio/Connect_pic_asaresult.mp3",
	},
	Connect_pic_incontrast: {
		text: "Amy’s favorite animal is a dog. _______, Carolina thinks cats are the best pets.",
		text1: "Amy’s favorite animal is a dog. ",
		text2: ", Carolina thinks cats are the best pets.",
		choice: ["in contrast", "for example", "otherwise", "in other word"],
		answer: 1,
		picture1: require("../Site/Images/Connect_pic_incontrast_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_incontrast_2.jpg"),
		audio: "../Site/audio/Connect_pic_incontrast.mp3",
	},
	Connect_pic_inconclusion: {
		text:
			"Jenny scores all of the points for her team. She is the best player on defense. _______, she is the best player on the team.",
		text1: "Jenny scores all of the points for her team. She is the best player on defense. ",
		text2: ", she is the best player on the team.",
		choice: ["on the other hand", "otherwise", "in conclusion", "in contrast"],
		answer: 3,
		picture1: require("../Site/Images/Connect_pic_inconclusion_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_inconclusion_2.jpg"),
		audio: "../Site/audio/Connect_pic_inconclusion.mp3",
	},
	Connect_pic_forinstance: {
		text:
			" Many schools offer team sports for their students. _________students at my school can be part of our soccer team.",
		text1: "Many schools offer team sports for their students. ",
		text2: " students at my school can be part of our soccer team.",
		choice: ["on the other hand", "in conclusion", "for instance", "in spite of that"],
		answer: 3,
		picture1: require("../Site/Images/Connect_pic_forinstance_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_forinstance_2.jpg"),
		audio: "../Site/audio/Connect_pic_forinstance.mp3",
	},
	Connect_pic_nevertheless: {
		text: "Sam broke his leg; ________ he continues to play baseball.",
		text1: "Sam broke his leg; ",
		text2: " he continues to play baseball.",
		choice: ["consequently", "nevertheless", "namely", "thus"],
		answer: 2,
		picture1: require("../Site/Images/Connect_pic_nevertheless_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_nevertheless_2.jpg"),
		audio: "../Site/audio/Connect_pic_nevertheless.mp3",
	},
	Connect_pic_whereas_A: {
		text: "Kobe has an umbrella ________ David does not.",
		text1: "Kobe has an umbrella ",
		text2: " David does not.",
		choice: ["likewise", "whether", "whereas", "moreover"],
		answer: 3,
		picture1: require("../Site/Images/Connect_pic_whereas_A_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_whereas_A_2.jpg"),
		audio: "../Site/audio/Connect_pic_whereas_A.mp3",
	},
	Connect_pic_therefore_A: {
		text: "Nick’s team won the football game; ________ Nick and his father are excited.",
		text1: "Nick’s team won the football game; ",
		text2: " Nick and his father are excited.",
		choice: ["on the other hand", "yet", "however", "therefore"],
		answer: 4,
		picture1: require("../Site/Images/Connect_pic_therefore_A_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_therefore_A_2.jpg"),
		audio: "../Site/audio/Connect_pic_therefore_A.mp3",
	},
	Connect_pic_consequently: {
		text: "Brad studied hard for the test. ________ he got a good grade.",
		text1: "Brad studied hard for the test. ",
		text2: " he got a good grade.",
		choice: ["in contrast", "even though", "consequently", "nonetheless"],
		answer: 3,
		picture1: require("../Site/Images/Connect_pic_consequently_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_consequently_2.jpg"),
		audio: "../Site/audio/Connect_pic_consequently.mp3",
	},
	Connect_pic_inotherwords: {
		text: "Our school will start recycling bottles. _______ all plastic and glass bottles will go in special bins.",
		text1: "Our school will start recycling bottles. ",
		text2: " all plastic and glass bottles will go in special bins.",
		choice: ["nevertheless", "in spite of that", "in other words", "even though"],
		answer: 3,
		picture1: require("../Site/Images/Connect_pic_inotherwords_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_inotherwords_2.jpg"),
		audio: "../Site/audio/Connect_pic_inotherwords.mp3",
	},
	Connect_pic_similarly: {
		text: "Grapes come in many different colors. _________, roses can also have many colors.",
		text1: "Grapes come in many different colors. ",
		text2: ", roses can also have many colors.",
		choice: ["because", "but", "however", "similarly"],
		answer: 4,
		picture1: require("../Site/Images/Connect_pic_similarly_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_similarly_2.jpg"),
		audio: "../Site/audio/Connect_pic_similarly.mp3",
	},
	Connect_pic_onthecontrary: {
		text: "Many people think that whales are fish. _______, they are mammals.",
		text1: "Many people think that whales are fish. ",
		text2: ", they are mammals.",
		choice: ["therefore", "furthermore", "on the contrary", "hense"],
		answer: 3,
		picture1: require("../Site/Images/Connect_pic_onthecontrary_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_onthecontrary_2.jpg"),
		audio: "../Site/audio/Connect_pic_onthecontrary.mp3",
	},
	Connect_pic_asaconsequence: {
		text: "During the class trip, the bus broke down. ________, we were not able to go to the museum.",
		text1: "During the class trip, the bus broke down. ",
		text2: ", we were not able to go to the museum.",
		choice: ["as a consequence", "but", "however", "similarly"],
		answer: 1,
		picture1: require("../Site/Images/Connect_pic_asaconsequence_1.jpg"),
		picture2: require("../Site/Images/Connect_pic_asaconsequence_2.jpg"),
		audio: "../Site/audio/Connect_pic_asaconsequence.mp3",
	},
	Connect_pic_incontrast_B: {
		text: "Mark’s favorite school subject is history. __________, Julie enjoys math class the most.",
		text1: "Mark’s favorite school subject is history. ",
		text2: ", Julie enjoys math class the most.",
		choice: ["at a result", "in contrast", "hence", "therefore"],
		answer: 2,
		picture1: require("../Site/Images/Connect_pic_incontrast_B_A.png"),
		picture2: require("../Site/Images/Connect_pic_incontrast_B_B.png"),
		audio: "../Site/audio/Connect_pic_incontrast_B.mp3",
	},
	Connect_sent_however: {
		text1: "The day was sunny and warm, ",
		text2: "however ",
		choice: ["everybody was at the beach.", "it was summer time.", "there was a strong wind."],
		answer: 2,
		audio: "../Site/audio/Connect_sent_however.mp3",
	},
	Connect_sent_consequently: {
		text1: "During the last battle, most soldiers in the red army were sick. ",
		text2: "Consequently, ",
		choice: [
			"many of the soldiers had bad injuries.",
			"the soldiers were strong enough to  win the battle.",
			"the soldiers were weak and lost the battle. ",
		],
		answer: 3,
		audio: "../Site/audio/Connect_sent_consequently.mp3",
	},
	Connect_sent_otherhand: {
		text1: "Most teachers think that homework is important. ",
		text2: "On the other hand, ",
		choice: [
			"these teachers like to give a lot of homework to students.",
			"many teachers think homework helps students learn.",
			"some teachers think that homework is not important.",
		],
		answer: 3,
		audio: "../Site/audio/Connect_sent_otherhand.mp3",
	},
	Connect_sent_moreover: {
		text1: "We can get books and magazines from our library. ",
		text2: "Moreover, ",
		choice: ["we can not eat in the library.", "we can get videos.", "we can not get video games."],
		answer: 2,
		audio: "../Site/audio/Connect_sent_moreover.mp3",
	},
	Connect_sent_nonetheless: {
		text1: "It rained all day during the school trip to the beach. ",
		text2: "Nonetheless, ",
		choice: ["most of the students had fun.", "the school trip was horrible.", "there even was scary lightning."],
		answer: 1,
		audio: "../Site/audio/Connect_sent_nonetheless.mp3",
	},
	Connect_sent_incontrast: {
		text1: "Cats like to eat fish. ",
		text2: "In contrast, ",
		choice: ["cats like to eat tuna fish.", "dogs like to chew bones.", "cats eat food made of fish."],
		answer: 2,
		audio: "../Site/audio/Connect_sent_incontrast.mp3",
	},
	Connect_sent_nonetheless_B: {
		text1: "A rain storm started during school recess. ",
		text2: "Nonetheless, ",
		choice: [
			"The students continued to play outside.",
			"The students decided to go inside.",
			"The students went to the library to read.",
		],
		answer: 1,
		audio: "../Site/audio/Connect_sent_nonetheless_B.mp3",
	},
	Connect_sent_however_B: {
		text1: "Some students enjoy reading. ",
		text2: "However, ",
		choice: [
			"some adults also enjoy reading.",
			"some students prefer to watch movies.",
			"some students read comic books.",
		],
		answer: 2,
		audio: "../Site/audio/Connect_sent_however_B.mp3",
	},
	Connect_sent_accordingly: {
		text1: "Annie wants to become a better piano player. ",
		text2: "Accordingly, ",
		choice: [
			"She practices the piano each day.",
			"She would also like to play the violin.",
			"She does not play piano very often.",
		],
		answer: 1,
		audio: "../Site/audio/Connect_sent_accordingly.mp3",
	},
	Anaphora_material: {
		text1: "Major volcanic eruptions release huge quantities of gases and ash into the air.",
		keyword: "These materials",
		text2: "can stay in the upper atmosphere for months or years.",
		choice: ["volcanic eruptions", "huge quantities", "gases and ash"],
		answer: 3,
		audio: "../Site/audio/Anaphora_material.mp3",
	},
	Anaphora_explorer: {
		text1:
			" Scott’s team and Johnson’s team tried to reach the top of the tallest mountain. Johnson’s team made it to the top first because of",
		keyword: "this explorer’s",
		text2: "leadership.",
		choice: ["Scott", "team", "Johnson"],
		answer: 3,
		audio: "../Site/audio/Anaphora_explorer.mp3",
	},
	Anaphora_movement: {
		text1:
			"China resisted the move for change. In 1989 students protested to demand changes, but the army opposed these changes. Troops were sent to stop",
		keyword: "the movement",
		text2: ".",
		choice: [
			"China resisted the move for change",
			"students protested to demand changes",
			"the army opposed the changes",
		],
		answer: 2,
		audio: "../Site/audio/Anaphora_movement.mp3",
	},
	Anaphora_phenom: {
		text1:
			"Our planet is made up of many layers of rock. The top layers are formed by solid rock. The deep layer is so hot that some rock melts. Volcanoes are formed when the melted rock pushes its way up through the top layers.",
		keyword: "This phenomenon",
		text2: "has been broadly studied.",
		choice: [
			"the top layers of solid rock",
			"the melted rock pushes its way up",
			"deep layer is so hot that rock melts",
		],
		answer: 3,
		audio: "../Site/audio/Anaphora_phenom.mp3",
	},
	Anaphora_system: {
		text1:
			"In April 2010, an international company caused a big oil explosion in the Gulf of Mexico. Scientists worry about the impact of the oil spill on the sea life. The sea waters are home to many animals that can suffer from the spill. Scientists say",
		keyword: "this system",
		text2: "was already weak and needs to be protected.",
		choice: [
			"an international company caused a big oil explosion ",
			"scientists worry about the impact of the oil spill",
			"sea waters are home to many animals ",
		],
		answer: 3,
		audio: "../Site/audio/Anaphora_system.mp3",
	},
	Anaphora_aunt: {
		text1: "",
		keyword: "It",
		text2:
			"must have been difficult on your aunt, having to work so many hours during the holiday season at the department store.",
		choice: ["the holiday season", "having to work many hours", "the department store"],
		answer: 2,
		audio: "../Site/audio/Anaphora_aunt.mp3",
	},
	Anaphora_fest: {
		text1: "",
		keyword: "It",
		text2:
			"has often been compared to Summer Fest, one of the largest festivals in the south. Stuartville’s streets have been as crowded over the last few days as they are during Summer Fest. Since it began last week, three million people have attended the Stuartville Fisherman’s Festival.",
		choice: ["Summer Fest", "three million people", "Stuartville Fisherman’s Festival"],
		answer: 3,
		audio: "../Site/audio/Anaphora_fest.mp3",
	},
	Anaphora_liquid: {
		text1: "Air temperature is measured using thermometers. Thermometers work because liquids expand when",
		keyword: "they",
		text2: "are heated and contract when they are cooled.",
		choice: ["liquids", "thermometers", "air"],
		answer: 1,
		audio: "../Site/audio/Anaphora_liquid.mp3",
	},
	Anaphora_voting: {
		text1:
			"We are citizens of a free country and we have the right to vote. Whether or not the system works perfectly,",
		keyword: "it",
		text2: "is better than a system with no voting.",
		choice: ["a free system", "a system of citizens", "a voting system"],
		answer: 2,
		audio: "../Site/audio/Anaphora_voting.mp3",
	},
	Anaphora_earth: {
		text1: "The Earth rotates on its axis once every 24 hours.",
		keyword: "It",
		text2: "orbits the sun once every 365 days.",
		choice: ["The Earth", "The Earth’s axis", "The Sun"],
		answer: 1,
		audio: "../Site/audio/Anaphora_earth.mp3",
	},
	Anaphora_olympicgames: {
		text1:
			"During the Olympic Games, countries from around the world send athletes to compete in various sporting events.",
		keyword: "These competitions",
		text2: "are divided into two categories: winter and summer.",
		choice: ["Countries from around the world", "athletes", "sporting events"],
		answer: 3,
		audio: "../Site/audio/Anaphora_olympicgames.mp3",
	},
	Anaphora_covered: {
		text1:
			"Mars’ red color comes from a chemical in its soil. When this chemical touches oxygen, it rusts and becomes red in color. How exactly the entire planet came to be covered in this red soil is a subject of debate among scientists. Some believe that",
		keyword: "this process",
		text2: "occurred long ago when water still flowed on Mars’ surface, spreading the dust across the planet.",
		choice: ["Mars’ red color", "Chemical touches oxygen", "the planet came to be covered in red soil"],
		answer: 3,
		audio: "../Site/audio/Anaphora_chemical.mp3",
	},
	Anaphora_difficultplane: {
		text1:
			"In 1903, the Wright brothers flew their first airplane. To fly the plane, the pilot laid on his stomach. Their plane was difficult to control in the air and was damaged after only four flights. The Wright brothers tried to solve",
		keyword: "this problem",
		text2: "in the next plane that they built.",
		choice: [
			"the Wright brothers flew their first airplane",
			"the pilot laid on his stomach",
			"the plane was difficult to control and was damaged",
		],
		answer: 3,
		audio: "../Site/audio/Anaphora_difficultplane.mp3",
	},
	Anaphora_scienceprojects: {
		text1:
			"For weeks, the class prepared their science projects. Finally, the day of the Science Fair arrived and students were excited to showcase their",
		keyword: "hard work",
		text2: ".",
		choice: ["week", "the class", "the science projects"],
		answer: 3,
		audio: "../Site/audio/Anaphora_scienceprojects.mp3",
	},
	Anaphora_animals: {
		text1:
			"During the school trip to the zoo, many of the students noticed that the animals were all sleeping out of sight. They didn’t seem like",
		keyword: "they",
		text2: "wanted to be bothered with the visitors.",
		choice: ["the animals", "the trip", "the zoo"],
		answer: 1,
		audio: "../Site/audio/Anaphora_animals.mp3",
	},
	Anaphora_telescope: {
		text1:
			"The scientist worked to get the telescope ready for the meteor shower. Working tirelessly for months the day final came for the",
		keyword: "project",
		text2: "to be realized.",
		choice: ["the telescope", "the meteor shower", "working tirelessly"],
		answer: 1,
		audio: "../Site/audio/Anaphora_telescope.mp3",
	},
	Anaphora_stateexam: {
		text1: "For the students,",
		keyword: "the time",
		text2: "had come. After months of studying they were finally ready to take their state exam.",
		choice: ["the state exam", "studying", "the students"],
		answer: 1,
		audio: "../Site/audio/Anaphora_stateexam.mp3",
	},
	Anaphora_financialfallout: {
		text1:
			"When the financial fallout of the Great Depression began in the mid 1920’s the country could not predict its eventual impact. It was a time of",
		keyword: "great turmoil",
		text2: "for the United States that would soon define the nation’s trajectory.",
		choice: ["the financial fallout", "the Great Depression", "c)	the impact"],
		answer: 3,
		audio: "../Site/audio/Anaphora_financialfallout.mp3",
	},
	Morpho_activity: {
		text1: "The children are very",
		text2: "",
		keyword: "activity",
		answer: ["active", "activ"],
		audio: "../Site/audio/Morpho_activity.mp3",
	},
	Morpho_ethnicity: {
		text1: "The city has many",
		text2: "groups",
		keyword: "ethnicity",
		answer: ["ethnic"],
		audio: "../Site/audio/Morpho_ethnicity.mp3",
	},
	Morpho_civility: {
		text1: "The children should be",
		text2: "",
		keyword: "civility",
		answer: ["civilized", "civilysed", "civilised", "civil"],
		audio: "../Site/audio/Morpho_civility.mp3",
	},
	Morpho_categorical: {
		text1: "These words go in the same",
		text2: "",
		keyword: "categorical",
		answer: ["categorie", "catagory", "catigory", "categore", "catagorie", "category"],
		audio: "../Site/audio/Morpho_categorical.mp3",
	},
	Morpho_complexity: {
		text1: "The problem is",
		text2: "",
		keyword: "complexity",
		answer: ["complex"],
		audio: "../Site/audio/Morpho_complexity.mp3",
	},
	Morpho_beneficial: {
		text1: "Good health is a",
		text2: "",
		keyword: "beneficial",
		answer: ["benifit", "benefit"],
		audio: "../Site/audio/Morpho_beneficial.mp3",
	},
	Morpho_durability: {
		text1: "This suitcase is",
		text2: "",
		keyword: "durability",
		answer: ["duruble", "durabul", "durible", "durable"],
		audio: "../Site/audio/Morpho_durability.mp3",
	},
	Morpho_contribution: {
		text1: "How will you",
		text2: "",
		keyword: "contribution",
		answer: ["contribute"],
		audio: "../Site/audio/Morpho_contribution.mp3",
	},
	Morpho_optional: {
		text1: "What is the other",
		text2: "",
		keyword: "optional",
		answer: ["option"],
		audio: "../Site/audio/Morpho_optional.mp3",
	},
	Morpho_cultural: {
		text1: "He studies their",
		text2: "",
		keyword: "cultural",
		answer: ["cultures", "culture"],
		audio: "../Site/audio/Morpho_cultural.mp3",
	},
	Morpho_invasion: {
		text1: "The aliens were ready to",
		text2: "",
		keyword: "invasion",
		answer: ["invaid", "invade", "invaed", "invade"],
		audio: "../Site/audio/Morpho_invasion.mp3",
	},
	Morpho_topical: {
		text1: "She is thinking about a new",
		text2: "",
		keyword: "topical",
		answer: ["topic"],
		audio: "../Site/audio/Morpho_topical.mp3",
	},
	Morpho_availability: {
		text1: "The video will soon be",
		text2: "",
		keyword: "availability",
		answer: ["availuble", "availible", "availeble", "availoble", "available"],
		audio: "../Site/audio/Morpho_availability.mp3",
	},
	Morpho_expansion: {
		text1: "The business will",
		text2: "",
		keyword: "expansion",
		answer: ["expand"],
		audio: "../Site/audio/Morpho_expansion.mp3",
	},
	Morpho_discrimination: {
		text1: "He works hard not to",
		text2: "",
		keyword: "discrimination",
		answer: [
			"discriminate",
			"discrimonate",
			"discrimunate",
			"discrimanate",
			"discriminait",
			"discrimonait",
			"discrimunait",
			"discrimanait",
		],
		audio: "../Site/audio/Morpho_discrimination.mp3",
	},
	Morpho_division: {
		text1: "The cake is hard to",
		text2: "",
		keyword: "division",
		answer: ["divide", "divied"],
		audio: "../Site/audio/Morpho_division.mp3",
	},
	Morpho_possession: {
		text1: "How many toys do you",
		text2: "",
		keyword: "possession",
		answer: ["posess", "pozess", "poses", "pozes"],
		audio: "../Site/audio/Morpho_possession.mp3",
	},
	Morpho_typical: {
		text1: "What is your favorite",
		text2: "of food?",
		keyword: "typical",
		answer: ["type", "tipe"],
		audio: "../Site/audio/Morpho_typical.mp3",
	},
	Morpho_astronomical: {
		text1: "He loves to learn about",
		text2: "",
		keyword: "astronomical",
		answer: [
			"astronomy",
			"astronemy",
			"astronimy",
			"astronamy",
			"astronumy",
			"astronemee",
			"astronimee",
			"astronamee",
			"astronumee",
		],
		audio: "../Site/audio/Morpho_astronomical.mp3",
	},
	Morpho_responsive: {
		text1: "She raised her hand to give her",
		text2: "",
		keyword: "responsive",
		answer: ["response", "respons", "responce"],
		audio: "../Site/audio/Morpho_responsive.mp3",
	},
	Morpho_scandalous: {
		text1: "The missing car keys caused a large",
		text2: "",
		keyword: "scandalous",
		answer: ["scandal", "scandel", "scandil", "scandol", "scandul"],
		audio: "../Site/audio/Morpho_scandalous.mp3",
	},
	Morpho_abundant: {
		text1: "There was an",
		text2: "of cookies at the bakery.",
		keyword: "abundant",
		answer: ["abundant", "abundent", "abundint", "abundunt"],
		audio: "../Site/audio/Morpho_abundant.mp3",
	},
};

export default (state = defaultState, action) => {
	if (action.type === "add_sessionNum") {
		const newState = JSON.parse(JSON.stringify(state));
		newState.sessionNum = newState.sessionNum + 1;
		return newState;
	}
	if (action.type === "update_fontSize") {
		const newState = JSON.parse(JSON.stringify(state));
		newState.fontSize = action.value;
		// console.log(action.value)
		return newState;
	}
	if (action.type === "ANSWER_QUESTION") {
		const newState = JSON.parse(JSON.stringify(state));
		if (newState.questionAns === "") {
			newState.questionAns = action.questionAns;
			newState.questionAnsSum = action.questionAns;
			newState.questions = action.question;
			newState.questionSum = action.question;
		} else {
			newState.questionAns += "," + action.questionAns;
			newState.questionAnsSum += "+" + action.questionAns;
			newState.questions += "," + action.question;
			newState.questionSum += "+" + action.question;
		}
		newState.numQuestions += 1;
		return newState;
	}
	if (action.type === "CLEAR_NUM_QUESTION") {
		const newState = JSON.parse(JSON.stringify(state));
		newState.numQuestions = 0;
		return newState;
	}

	return state;
};
