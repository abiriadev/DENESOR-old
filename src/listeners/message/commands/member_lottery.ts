

export {}

// import {log} from "util";
import Command from "../../../modules/classes/Command"
// import fs from "fs/promises"

const shuffle = (array: Array<any>): Array<any> => array.sort(() => Math.random() - Math.random())
const randomChoice = (array: Array<any>, n: number): Array<any> => shuffle(array).splice(0, n)
const all_members = async (guild: any): Promise<Array<any>> => (await guild.members.fetch()).array()

const random_get_members_according_to_role = async (target_guild, target_role: any, n: number): Promise<Array<any>> => {


    let all_members_array = await all_members(target_guild)

    let filterd = all_members_array.filter(member => {
        for (let role of member._roles) return role == target_role.id ? true : false
    })

    return randomChoice(filterd, n)
}

let me: Command;
me = new Command(
    {
        condition: async msg => /* console.log( */ msg.content.slice(0, 5) == "멤버 추첨",
        action: async msg => {

            const content_parse = msg.content.split(" ")

            const target_number = content_parse[2]
            const target_role_name = content_parse[3]

            const target_role = msg.guild.roles.cache.find(role_ele => role_ele.name == target_role_name);
            // target_role.members.forEach(member => console.log(member.displayName))

            // const shuffle = (array: Array<any>): Array<any> => array.sort(() => Math.random() - Math.random())
            // const randomChoice = (array: Array<any>, n: number): Array<any> => shuffle(array).splice(0, n)
            // const generate_range_array = (n: number): Array<number> => {
            //     let arr: Array<number> = []
            //     let i: number = 0
            //     while (i < n) {
            //         arr.push(i)
            //         // console.log(i)
            //         i++
            //     }
            //     return arr
            // }

            // const random_get_members_according_to_role = (target_guild, target_role_name: string, n: number): Array<any> => {
            //
            //     // member 콜렉션 가져오기
            //     let original: Array<any> = (target_guild.roles.cache.find(role => role.name == target_role_name)).members
            //
            //     // original = Array.prototype.slice.call(original)
            //     const get_original_index = (index: number): any => {
            //
            //         let i = 0
            //         let ele_ = null
            //         original.forEach(ele => {
            //
            //             if (i == index) {
            //                 // console.log(ele)
            //                 ele_ = ele
            //             }
            //             i++
            //
            //         })
            //         return ele_
            //
            //     }
            //
            //     let c = 0
            //     console.log(`original: ${original.forEach(e => c++)}`)
            //     console.log(`c: ${c}`)
            //
            //     let index_array = generate_range_array(c /* original.length */)
            //
            //     console.log(`index_array: ${index_array}`)
            //
            //     let shuffled_index_array = randomChoice(index_array, n)
            //
            //     console.log(`shuffled_index_array: ${shuffled_index_array}`)
            //
            //     // 리턴할 배열 생성
            //     let new_original: Array<any> = []
            //
            //     // 추출
            //     shuffled_index_array.forEach(i => new_original.push(get_original_index(i)))
            //
            //     return new_original
            //
            // }

            //  // let asd = random_get_members_according_to_role(msg.guild, "Greeting", 4)
            //  // asd.forEach(member => console.log(member.user.username))

            // const all_members = async (guild: any): Promise<Array<any>> => (await guild.members.fetch()).array()
            // let all_members_array = await all_members(msg.guild)

            // a.forEach(m => {
            //     if (m._roles.hasOwnProperty('0')) {
            //         for (let role in m._roles) {
            //             console.log(`${role} : ${m._roles[role]}`)
            //         }
            //     }
            // })

            let c = await random_get_members_according_to_role(msg.guild, target_role, target_number)

            let cc = ""
            console.log("=====")
            c.forEach(member => {
                cc += `\n${member.user.tag}`
                console.log(member.user.tag)
            })

            msg.channel.send(cc)


            // let role_id: string

            // let b = all_members_array.filter(member: any => {
            //     for (let role of member._roles) return role == role_id ? true : false
            // })

            // let c = randomChoice(b, 4)

            // c.forEach(member => {
            //     console.log(member.user.username)
            // })

        },
        description: `random_get_members_according_to_role command`
    }
    // {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);
