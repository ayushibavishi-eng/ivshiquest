import { explainQ, q, writeQ } from "@/content/lessons/question";
import { grade4MathLesson } from "@/content/lessons/grade-4-math/format";

export const shapesAroundUsLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-shapes-around-us-core",
  title: "Shapes Around Us",
  domainTitle: "Shapes",
  nextConceptIds: ["ncert-g4-maths-mela-hide-and-seek-core"],
  content: {
    objective:
      "Name everyday 2D and 3D shapes and say one thing that makes a shape itself — sides, corners, faces, or how it sits in space.",
    wonder: {
      prompt:
        "A dice and a square drawing both look 'square-ish'. Which one can you pick up and roll? Why is that a different kind of shape?",
    },
    explore: {
      text: "Flat shapes live on a page. They have length and breadth. Solid shapes take up space. You can hold them. A square is flat. A cube is a box with six square faces.",
      activity: {
        prompt: "Which object is a solid shape, not just a flat drawing?",
        choices: [
          {
            id: "ball",
            label: "A cricket ball",
            note: "You found it! A ball is a sphere. It fills space. You can hold it.",
          },
          {
            id: "drawn-circle",
            label: "A circle drawn on paper",
            note: "That circle is flat. It has no thickness you can pick up like a ball.",
          },
          {
            id: "window-pane",
            label: "The outline of a window drawn in a notebook",
            note: "A drawing of a window is a flat shape on the page.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A 2D shape is flat. Triangles, squares, rectangles, and circles are 2D. Count sides and corners to name them.",
        "A 3D shape fills space. Cubes, cuboids, spheres, cones, and cylinders are 3D. A dice is a cube. A tin is often a cylinder.",
        "A cube has 6 square faces, 12 edges, and 8 corners. A cuboid is like a box. Its faces are rectangles, and opposite faces match.",
        "The same object can hide more than one shape. A birthday cap looks like a cone. Its bottom edge looks like a circle.",
        "A point is a tiny place, not a blob. A line segment is a straight path with two ends. A corner is where two sides meet and turn.",
        "A square has 4 equal sides and 4 square corners. A long rectangle has square corners too, but opposite sides match and two sides are longer. Opposite edges of a book stay the same distance — they do not meet. Window frames often meet in a plus-sign square corner.",
        "A triangle can have three matching sides, or sides that differ. On a circle, the middle is the centre. A straight line through the centre from edge to edge is a diameter — two radii joined.",
      ],
    },
    examples: [
      {
        caption: "Kitchen shapes",
        body: "A roti is a circle. An ice-cream cone is a cone. A lunch box is often a cuboid.",
      },
      {
        caption: "Count to name",
        body: "Three straight sides that join? Triangle. Four equal sides and four square corners? Square.",
      },
      {
        caption: "Not the same",
        body: "A circle and a sphere are friends, but not twins. The circle is the flat face. The sphere is the whole ball.",
      },
    ],
    connection:
      "Builders, artists, and cricket coaches all use shape names so everyone pictures the same thing.",
    try: {
      prompt:
        "Look at a closed book. Is the cover a rectangle? Is the whole book more like a cuboid? Say why both answers can be yes.",
      reveal:
        "The cover is a flat rectangle. The book has thickness, so the whole book is a cuboid. One object, two shape stories.",
    },
    practice: [
      q(
        "g4m-sh-p1",
        "A tissue box is most like which solid?",
        "a cuboid",
        "a circle",
        "a triangle",
        "a",
        "A tissue box has thickness and rectangular faces. That is a cuboid.",
        "Can you slide the box on a table? Does it have a top, bottom, and sides?",
        "A circle or triangle would be a flat drawing, not the whole box.",
        {
          a: "You spotted the box shape.",
          b: "A circle is flat. The box fills space.",
          c: "A triangle is flat. Count the box faces instead.",
        },
      ),
      q(
        "g4m-sh-p2",
        "Which shape has 3 sides and 3 corners?",
        "triangle",
        "square",
        "circle",
        "a",
        "A triangle is the three-sided closed shape.",
        "Trace the edge with a finger. How many turns?",
        "A square has 4 sides. A circle has a curved edge and no corners.",
        {
          a: "You found the three-sided shape.",
          b: "A square has four sides.",
          c: "A circle has no corners to count.",
        },
      ),
      explainQ(
        "g4m-sh-p3",
        "A friend says a ball is a circle. What would you say, and why?",
        "A ball is a sphere. A circle is the flat round shape. You can hold a ball; a circle sits on the page.",
        "Think: can you pick it up and turn it in every direction?",
        "Calling every round thing a circle mixes flat and solid.",
        ["sphere", "circle", "solid|3d|hold|space"],
      ),
    ],
    reasoning: [
      q(
        "g4m-sh-r1",
        "You can see only one square face of a closed box. Could the box still be a cube?",
        "Yes, if all six faces are squares of the same size",
        "No, one square face means it must be only a drawing",
        "Yes, every box is a cube",
        "a",
        "A cube needs six matching square faces. One square face is a clue, not the whole proof.",
        "Imagine turning the box. What other faces would you need to check?",
        "One face is not enough, and not every box is a cube.",
        {
          a: "Nice connection. You checked the other faces in your mind.",
          b: "A box can still be solid even if you see one face first.",
          c: "A long carton can have rectangle faces. That is a cuboid, not a cube.",
        },
      ),
      explainQ(
        "g4m-sh-r2",
        "Why might a wheel look like a circle from the side, but you still call the tyre a 3D shape?",
        "The outline can look circular, but the tyre has thickness, so the whole tyre fills space.",
        "Look at the tyre from the edge. Is it thin like a drawing?",
        "The side view can trick you into naming only the flat outline.",
        ["thickness|thick|space|solid|3d", "circle"],
      ),
      q(
        "g4m-sh-r3",
        "A square and a long rectangle both have square corners. What extra does the square have?",
        "all four sides the same length",
        "no corners at all",
        "it is a solid ball",
        "a",
        "Square corners make both rectangles. Equal sides make the special rectangle we call a square.",
        "Trace the four sides. Are they twins?",
        "A square is still a flat shape with corners.",
        {
          a: "You used sides, not only corners.",
          b: "Both shapes have four corners.",
          c: "A square is flat. A ball is a sphere.",
        },
      ),
      q(
        "g4m-sh-r4",
        "The two long edges of a closed book, if they never meet, are like...",
        "parallel lines — same distance apart",
        "a circle’s centre",
        "a sphere",
        "a",
        "Those edges stay the same distance. They do not meet. That is the parallel idea, in a book.",
        "Run a finger along both long edges.",
        "Centre and sphere are round-shape ideas.",
        {
          a: "You spotted edges that never meet.",
          b: "The centre sits in the middle of a circle.",
          c: "A sphere is a ball, not a book edge.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-sh-t1",
        "How many faces does a cube have?",
        "6",
        "4",
        "8",
        "a",
        "A cube has 6 square faces. It has 8 corners and 12 edges.",
        "Think of a dice. How many sides can land up?",
        "Eight is the number of corners, not faces.",
        {
          a: "You found the six faces.",
          b: "Four would be only the sides of a square.",
          c: "Eight corners sit on a cube, but faces are six.",
        },
      ),
      writeQ(
        "g4m-sh-t2",
        "Name one 3D shape you can find at home, and the object.",
        ["cube", "cuboid", "sphere", "cone", "cylinder", "ball", "box", "tin", "dice"],
        "Any solid that fills space works: a dice (cube), a tin (cylinder), a ball (sphere).",
        "Walk to the kitchen or your bag. What can you hold?",
        "A drawing of a square is 2D, not 3D.",
        ["cube|cuboid|sphere|cone|cylinder|ball|box|tin|dice"],
      ),
      q(
        "g4m-sh-t3",
        "A straight line through the middle of a circle, from edge to edge, is...",
        "a diameter (two radii joined)",
        "a cube edge",
        "a parallel pair",
        "a",
        "The middle is the centre. Edge to edge through the centre is a diameter.",
        "Put a finger on the middle, then draw through it.",
        "Cube edges and parallel pairs belong to boxes and books.",
        {
          a: "You found the line through the centre.",
          b: "A cube edge is a straight side of a box.",
          c: "Parallel pairs never meet. This line cuts the circle.",
        },
      ),
    ],
    misconceptions: [
      {
        idea: "Every round thing is a circle.",
        correction: "A circle is flat. A ball is a sphere. Look for thickness.",
      },
      {
        idea: "A cube and a cuboid are the same.",
        correction: "A cube’s faces are all squares. A cuboid can have rectangular faces.",
      },
    ],
    reflect: {
      prompt: "What shape did you notice today that you used to call by another name?",
      keyIdeas: ["flat|solid", "face|side", "cube|circle|square|ball"],
    },
    mastery: q(
      "g4m-sh-m1",
      "A square and a cube are different because...",
      "a square is flat and a cube fills space with 6 square faces",
      "they are two words for the same thing",
      "a cube has no corners",
      "a",
      "Flat versus solid is the big idea. The cube uses squares as faces.",
      "Which one can you stack like a box?",
      "A cube has corners. It is not just another name for square.",
      {
        a: "You spotted the pattern: flat square, solid cube.",
        b: "The words are cousins, not twins.",
        c: "A cube has 8 corners.",
      },
    ),
    masteryCriteria:
      "You can point to a 2D shape and a 3D object and say one difference, using a face, side, or corner.",
    teach: {
      prompt:
        "Teach Ivshi using two things in the room: one flat shape and one solid shape. Name them and say how you know.",
      keyIdeas: ["flat|circle|square", "solid|cube|ball|box", "face|side|corner"],
    },
  },
});

export const hideAndSeekLesson = grade4MathLesson({
  conceptId: "ncert-g4-maths-mela-hide-and-seek-core",
  title: "Hide and Seek",
  domainTitle: "Position",
  prerequisites: ["ncert-g4-maths-mela-shapes-around-us-core"],
  nextConceptIds: ["ncert-g4-maths-mela-patterns-around-us-core"],
  content: {
    objective:
      "Use position words — left, right, between, behind, in front — so someone else can find a hidden place.",
    wonder: {
      prompt:
        "Your friend says, 'The pebble is next to the tree.' You look and see three trees. Why is that clue not enough?",
    },
    explore: {
      text: "Position is a place compared with something else. Left and right depend on which way you are facing. Between means in the middle of two things. Behind means on the far side, hidden from the front.",
      activity: {
        prompt: "You face the classroom door. Your bag is on your left. If you turn around, where does the bag seem to be?",
        choices: [
          {
            id: "now-right",
            label: "On your right, because you turned",
            note: "You spotted it. Left and right travel with you. After a turn, the same bag can sit on a new side.",
          },
          {
            id: "still-left",
            label: "Still on your left, always",
            note: "Left is not glued to the room. It follows the way you face.",
          },
          {
            id: "above",
            label: "Above your head",
            note: "Turning around does not lift the bag into the air.",
          },
        ],
      },
    },
    understand: {
      paragraphs: [
        "A good hiding clue names a landmark: the red pot, the second window, the big neem.",
        "Left and right change if you turn. 'The door's left' can mean the door's own left, so say whose left you mean.",
        "Between, behind, in front, near, and far help a seeker walk a path, not just stare.",
        "On a simple map, the top is often 'away from you' on the paper, not always north, unless the map says so.",
      ],
    },
    examples: [
      {
        caption: "Fair clue",
        body: "The chalk is in the box under the window, behind the green bottle.",
      },
      {
        caption: "Fuzzy clue",
        body: "'It's over there' does not tell a seeker where to walk.",
      },
      {
        caption: "Two landmarks",
        body: "The pebble sits between the tap and the neem, closer to the tap.",
      },
    ],
    connection:
      "Giving directions to a new classmate, finding a seat in a hall, and reading a simple school map all use position language.",
    try: {
      prompt:
        "Hide a pencil using only words. A friend may not turn their head until you finish. Which two landmarks will you name?",
      reveal:
        "Two landmarks plus a word like between or behind usually beats one vague 'near the table'.",
    },
    practice: [
      q(
        "g4m-hs-p1",
        "Aman faces you. He raises his right hand. Which hand of yours matches the same side of the room?",
        "your left hand, because you face him",
        "your right hand, always",
        "both hands at once",
        "a",
        "When two people face each other, one person's right is the other person's left.",
        "Hold up your right hand and look at a friend facing you.",
        "Right is not the same wall for both of you when you face each other.",
        {
          a: "You found the facing trick.",
          b: "That would work if you stood the same way, shoulder to shoulder.",
          c: "One matching side is enough.",
        },
      ),
      q(
        "g4m-hs-p2",
        "The cat is behind the sofa. Where should you look first?",
        "on the far side of the sofa, away from you",
        "on top of the sofa cushion only",
        "inside a closed fridge",
        "a",
        "Behind means the sofa is between you and the cat.",
        "Stand where you are. What does the sofa hide?",
        "Behind is not the same as on top or in another room.",
        {
          a: "You used the sofa as a landmark.",
          b: "On top is a different place word.",
          c: "The fridge is a new landmark you were not given.",
        },
      ),
      writeQ(
        "g4m-hs-p3",
        "Finish the clue: The book is ______ the two water bottles.",
        ["between", "in between", "in the middle of"],
        "Between names the middle of two landmarks.",
        "Picture two bottles with a gap.",
        "On or under would need one bottle, not two as a pair.",
        ["between", "middle"],
      ),
    ],
    reasoning: [
      explainQ(
        "g4m-hs-r1",
        "Why is 'turn left at the big tree' safer than 'turn left' if the seeker might start facing another way?",
        "Left depends on facing. The tree is a landmark both people can share, so the turn is tied to a place.",
        "What if the seeker starts looking the other way?",
        "Left without a landmark can send someone the opposite way.",
        ["left", "face|facing|turn", "tree|landmark|place"],
      ),
      q(
        "g4m-hs-r2",
        "A map shows the well to the right of the school. You hold the map with the school at the bottom. Where is the well on the paper?",
        "toward the right side of the paper, if the map is not turned",
        "always toward the top of the paper",
        "inside the school drawing",
        "a",
        "If you keep the map the way it was drawn, right stays right on the page.",
        "Don't spin the paper yet. Point to the school's right.",
        "Top of the paper is not automatically 'right'.",
        {
          a: "You kept the map still and used its right.",
          b: "Top is only 'away' if the map says so.",
          c: "To the right of the school is outside it.",
        },
      ),
    ],
    retrieve: [
      q(
        "g4m-hs-t1",
        "Which word means 'in the middle of two things'?",
        "between",
        "behind",
        "above",
        "a",
        "Between is the middle place.",
        "Think of standing in a line of three.",
        "Behind is the far side of one thing.",
        {
          a: "You found the middle word.",
          b: "Behind hides something on the far side.",
          c: "Above is higher up, not in the middle.",
        },
      ),
      explainQ(
        "g4m-hs-t2",
        "Give a hide-and-seek clue that uses two landmarks.",
        "The pebble is between the tap and the neem, closer to the tap.",
        "Name two things the seeker can see.",
        "A single 'over there' is too thin.",
        ["between|behind|in front|near", "and"],
      ),
    ],
    misconceptions: [
      {
        idea: "Left and right never change.",
        correction: "They follow the way a person faces. Say whose left you mean.",
      },
      {
        idea: "One vague word is enough.",
        correction: "A landmark plus a place word helps the seeker walk a path.",
      },
    ],
    reflect: {
      prompt: "When did left and right trick you this week? What landmark would have helped?",
      keyIdeas: ["left", "right", "landmark"],
    },
    mastery: q(
      "g4m-hs-m1",
      "A strong position clue needs...",
      "a landmark and a place word such as behind or between",
      "only the word left, with no place named",
      "a long story with no places in it",
      "a",
      "Landmarks plus place words let someone else find the spot.",
      "Could a new friend follow your sentence?",
      "Left alone can flip if they face another way.",
      {
        a: "You built a clue someone can follow.",
        b: "Left needs a facing or a landmark.",
        c: "Stories need places if they are clues.",
      },
    ),
    masteryCriteria:
      "You can hide or find an object using left/right or between/behind and at least one named landmark.",
    teach: {
      prompt:
        "Teach Ivshi how to find your pencil box using two landmarks and one place word.",
      keyIdeas: ["landmark|between|behind|left|right", "place"],
    },
  },
});
