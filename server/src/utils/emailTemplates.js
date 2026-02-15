export const getWelcomeEmailHtml = (name, message) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Portfolio</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background-color: #1DB954; padding: 30px 20px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
    .content { padding: 30px 20px; color: #333333; line-height: 1.6; }
    .message-box { background-color: #f9f9f9; border-left: 4px solid #1DB954; padding: 15px; margin: 20px 0; font-style: italic; }
    .footer { background-color: #333333; color: #aaaaaa; text-align: center; padding: 20px; font-size: 12px; }
    .button { display: inline-block; background-color: #1DB954; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 25px; font-weight: bold; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thanks for Reaching Out! 🚀</h1>
    </div>
    <div class="content">
      <p>Hi <strong>${name}</strong>,</p>
      <p>I've received your message and will get back to you as soon as possible. Thanks for visiting my portfolio!</p>
      
      <p>Here's a copy of what you sent:</p>
      <div class="message-box">
        "${message}"
      </div>
      
      <p>In the meantime, feel free to check out more of my work.</p>
      <center><a href="https://priyanshudotsite.vercel.app" class="button">Visit Portfolio</a></center>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Priyanshu Kumar. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
};

export const getAdminNotificationHtml = (name, email, message) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; }
    .header { background-color: #333333; padding: 20px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; }
    .content { padding: 30px 20px; color: #333333; line-height: 1.6; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555555; display: block; margin-bottom: 5px; }
    .value { background-color: #f9f9f9; padding: 10px; border-radius: 4px; border: 1px solid #eeeeee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Contact 📬</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <div class="value"><a href="mailto:${email}" style="color: #1DB954;">${email}</a></div>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="value">${message}</div>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};
