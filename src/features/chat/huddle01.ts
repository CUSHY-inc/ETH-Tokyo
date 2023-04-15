const postData = async () => {
  const response = await fetch('https://iriko.testing.huddle01.com/api/v1/create-iframe-room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'VwTZ4AGTxme9snANex9tep3NwvVMGfYd'
    },
    body: JSON.stringify({ title: 'NetworX' })
  });
  if (response.ok) {
    const responseData = await response.json();
    console.log(responseData.data.meetingLink);
    window.open(responseData.data.meetingLink, '_blank')
  } else {
    console.error('Failed to fetch data')
  }
}

export default postData;