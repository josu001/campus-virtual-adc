
export default function LessonItem({ title, content }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-2">
      <h4 className="font-bold">{title}</h4>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
