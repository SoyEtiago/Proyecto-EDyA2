const express = require('express')

const reqLog = (req, res, next) => {
  const { url, method, headers } = req;
  const startTime = Date.now();
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const formattedTime = new Date().toISOString();

  console.log(`[${formattedTime}] ${method} ${url} - Client IP: ${clientIp} - User-Agent: ${headers['user-agent']}`);

  // Capture the response on finish
  res.on('finish', () => {
    const responseTime = Date.now() - startTime; // Calculate response time
    const statusCode = res.statusCode; // Get the response status code
    console.log(`[${formattedTime}] ${method} ${url} - Status: ${statusCode} - Response Time: ${responseTime}ms`);
  });

  next();
};

module.exports = reqLog
