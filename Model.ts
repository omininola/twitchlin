// TODO - YouTube API - Get channelId by its name or alias
function ytGetChannelIdByAlias(alias: string) {
    let channelId = ""
    // Make the API call
    return channelId
}

function ytGetChannelIdByName(name: string) {
    let channelId = ""
    // Make the API call
    return channelId
}

function ytGetChannelId(channelName: string) {
    let alias: boolean = false
    if (channelName.startsWith("@")) alias = true

    let channelId

    if (alias) {
        channelId = ytGetChannelIdByAlias(channelName)
    } else {
        channelId = ytGetChannelIdByName(channelName)
    }

    return channelId
}

// TODO - YouTube API - Get channel information by channelId
function ytGetChannelInformation(channelId: string) {
    let channelInfo = {}
    // Make the API call
    // Parse information to channelInfo
    return channelInfo
}

// TODO - YouTube API - Get last stream information by channelId
function ytGetLastStreamInformation(channelId: string) {
    let lastStreamInfo = {}
    // Make the API call
    return lastStreamInfo
} 

// TODO - YouTube API - Subscribe to channel push notifications by its channelId for receiving the live notification
function ytSubToLivePushNotification(channelId: string) {
    // Make the API call 
}

// TODO - Twitch API - Get channel information by its name
function twGetChannelInformation(channelName: string) {
    let channelInfo = {}
    // Make the API call
    return channelInfo
}

// TODO - Twitch API - Get last stream information by channel name
function twGetLastStreamInformation(channelName: string) {
    let lastStreamInfo = {}
    // Make the API call
    // Parse information to lastStreamInfo
    return lastStreamInfo
} 

// TODO - Twitch API - Subscribe to channel WebSocket for receiveing the live notification
function twSubToLivePushNotification(channelName: string) {
    // Make the API call
}

// TODO - Read throught channel list and decided how to proceed based on its platform
interface Stream {
    id: string
}

interface Channel {
    id: string
    platform: "YouTube" | "Twitch"
    platformId: string
    name: string
    lastStream: Stream
}

function getChannelsInformation(channelList: Channel[]) {
    channelList.map(channel => {
        const platform = channel.platform

        if (platform === "YouTube") {
            const info = ytGetChannelInformation(channel.platformId)
            const lastStreamInfo = ytGetLastStreamInformation(channel.platformId)
            // Parse info to channel
            // Parse lastStreamInfo and include it in channel

        } else if (platform === "Twitch") {
            const info = twGetChannelInformation(channel.name)
            const lastStreamInfo = twGetLastStreamInformation(channel.name)
            // Parse info to channel
            // Parse lastStreamInfo and include it in channel

        }
    })
}

// TODO - Add new channel
function addNewChannel(channelName: string, platform: "YouTube" | "Twitch") {
    if (platform === "YouTube") {
        const channelId = ytGetChannelId(channelName)
        const info = ytGetChannelInformation(channelId)
        const lastStreamInfo = ytGetLastStreamInformation(channelId)
        // Parse info to channel
        // Parse lastStreamInfo and include it in channel

    } else if (platform === "Twitch") {
        const info = twGetChannelInformation(channelName)
        const lastStreamInfo = twGetLastStreamInformation(channelName)
        // Parse info to channel
        // Parse lastStreamInfo and include it in channel

    }
}

// TODO - Move channel
function moveChannel(channelId: string, position: number) {
    // Copy channel structure to position

    // Delete old channel entry
}