"use strict"
const fetch = require("node-fetch")

async function getPlayerData(userAddress) {
  if (userAddress === null) return
  let result = []
  const response = await fetch(
    `http://localhost:3000/api/profile/${userAddress}`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => result.push(response))

  console.log("🚀 ~ file: index.js ~ line 18 ~ getPlayerData ~ data", result)
  return result
}

function getConnectedPlayers(params) {}

async function setPlayerPosition(params) {
  const body = params
  const response = await fetch(
    `http://localhost:3000/api/sdk/player-position`,
    {
      method: "POST",
      body,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
  console.log(response)
  return response
}

async function getPlayerPosition(userAddress) {
  if (userAddress === null) return
  let result = []
  const response = await fetch(
    `http://localhost:3000/api/sdk/player-position/${userAddress}`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => result.push(response.playerPosition))

  console.log(result)
}

module.exports = {
  getPlayerData,
  getConnectedPlayers,
  setPlayerPosition,
  getPlayerPosition,
}
