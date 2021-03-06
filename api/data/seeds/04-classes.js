exports.seed = function (knex) {
  return knex("classes").insert([
    {
      class_name: "Weight Class",
      class_instructor: 1,
      type: "Weight Lifting",
      level: "Intermediate",
      duration: "2 hours",
      classSize: "50",
    },
    {
      class_name: "Inner Peace",
      class_instructor: 1,
      type: "Yoga",
      level: "Beginner",
      duration: "1 hour",
      classSize: "20",
    },
    {
      class_name: "Running Wild",
      class_instructor: 1,
      type: "Cardio",
      level: "Intermediate",
      duration: "3 hours",
      classSize: "35",
    },
    {
      class_name: "Ultimate Training",
      class_instructor: 1,
      type: "Cross-fit",
      level: "Expert",
      duration: "4 hours",
      classSize: "25",
    },
  ]);
};
