import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ratingOptions = ['malo', 'regular', 'bueno', 'excelente'];

const CommentForm = ({ onSubmit }) => {
  const [newComment, setNewComment] = useState({ username: '', rating: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.username && newComment.rating && newComment.content) {
      onSubmit(newComment);
      setNewComment({ username: '', rating: '', content: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={newComment.username}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Calificación:</label>
        <div className="flex space-x-2">
          {ratingOptions.map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={option}
                checked={newComment.rating === option}
                onChange={handleInputChange}
                className="mr-1"
                required
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block mb-2">Comentario:</label>
        <textarea
          id="content"
          name="content"
          value={newComment.content}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          rows="3"
          required
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Enviar Comentario
      </button>
    </form>
  );
};

const CommentList = ({ comments }) => (
  <div className="space-y-4">
    {comments.map((comment) => (
      <div key={comment.id} className="border p-4 rounded">
        <div className="flex justify-between items-center mb-2">
          <strong>{comment.username}</strong>
          <span className="text-sm font-semibold text-blue-600">
            {comment.rating.charAt(0).toUpperCase() + comment.rating.slice(1)}
          </span>
        </div>
        <p>{comment.content}</p>
      </div>
    ))}
  </div>
);

const CommentSystem = ({ title = "Comentarios del Evento" }) => {
  const [comments, setComments] = useState([
    { id: 1, username: "María", rating: "excelente", content: "¡El evento estuvo increíble! Muy bien organizado." },
    { id: 2, username: "Juan", rating: "bueno", content: "Me gustó mucho, aunque el sonido podría mejorar." },
    { id: 3, username: "Ana", rating: "regular", content: "Esperaba más variedad en las actividades." }
  ]);

  const handleAddComment = (newComment) => {
    setComments(prev => [...prev, { ...newComment, id: Date.now() }]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <CommentForm onSubmit={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSystem;
