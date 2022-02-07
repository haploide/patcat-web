export interface BusinessProcess {
  _id: string;
  name: string;
  description: string;
  category: Category;
}

interface Category {
  _id: string;
  name: string;
  description: string;
}

// TODO: agregar una interfaz para el caso que responda error
