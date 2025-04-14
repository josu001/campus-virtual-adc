
import Navbar from '../../components/Navbar';

export default function TeacherDashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Panel del Docente</h2>
        {/* Aquí se gestionan los cursos y lecciones */}
      </div>
    </div>
  );
}
