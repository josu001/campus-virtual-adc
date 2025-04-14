
import Navbar from '../../components/Navbar';

export default function StudentDashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Mis Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Aquí se mapearían los cursos */}
        </div>
      </div>
    </div>
  );
}
