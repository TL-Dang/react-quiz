function FinishScreen({ index, points, maxPossiblePoints, numQuestions, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '⭐️⭐️⭐️⭐️⭐️';
  if (percentage >= 80 && percentage < 100) emoji = '⭐️⭐️⭐️⭐️';
  if (percentage >= 50 && percentage < 80) emoji = '⭐️⭐️⭐️';
  if (percentage >= 1 && percentage < 50) emoji = '⭐️⭐️';
  if (percentage === 0) emoji = '⭐️';

  if (index < numQuestions - 1)
    return (
   <>
      <p className='result'>
        <span>{emoji}</span>You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highScore'>
         (High Score: {highscore} pts)
      </p>
      </>
    );
}

export default FinishScreen;
