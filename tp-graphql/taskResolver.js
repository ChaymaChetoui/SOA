// taskResolver.js
let tasks = [
  {
    id: "1",
    title: "Développement Front-end pour Site E-commerce",
    description:
      "Créer une interface utilisateur réactive en utilisant React et Redux pour un site e-commerce.",
    completed: false,
    duration: 3,
  },
  {
    id: "2",
    title: "Développement Back-end pour Authentification Utilisateur",
    description:
      "Implémenter un système d'authentification et d'autorisation pour uneapplication web en utilisant Node.js, Express, et Passport.js",
    completed: false,
    duration: 4,
  },
  {
    id: "3",
    title: "Tests et Assurance Qualité pour Application Web",
    description:
      "Développer et exécuter des plans de test et des cas de test complets.",
    completed: false,
    duration: 5,
  },
];
const taskResolver = {
  Query: {
    task: (_, { id }) => tasks.find((task) => task.id === id),
    tasks: () => tasks,
  },
  Mutation: {
    addTask: (_, { title, description, completed }) => {
      const task = {
        id: String(tasks.length + 1),
        title,
        description,
        completed,
        duration,
      };
      tasks.push(task);
      return task;
    },
    completeTask: (_, { id }) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        return tasks[taskIndex];
      }
      return null;
    },
    changeDescription: (_, { id, description }) => {
      const task = tasks.find((task) => task.id === id);
      if (task) {
        task.description = description;
        return task;
      }
      return null;
    },
    deleteTask: (_, { id }) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return {
          message: `La tâche avec l'ID ${id} a été supprimée avec succès.`,
        };
      }
      return { message: `Aucune tâche trouvée avec l'ID ${id}.` };
    },
  },
};
module.exports = taskResolver;
