declare const stop = Symbol.for('stop')

class MsgEx extends ((await import('discord.js')).Message) {
    args?: Array<string>
    command?: string
}

class ClientEx extends ((await import('discord.js')).Client) {
    hostID?: discord.snowflake
    host?: discord.User

    prefix?: string
}

type midRes = msgEx | typeof stop