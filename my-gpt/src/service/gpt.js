import axios from "axios";

export const CallGpt = async ({ prompt }) => {
    const messages = [
        {
          role: "system",
          content: `## INFO ##
        you can add images to the reply by URL, Write the image in JSON field 
        Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##`,
        },
        {
          role: "system",
          content: `You're a fitness trainer and nutritionist with 10 years of experience helping people lose weight. Proceed in the following order.`,
        },
        {
          role: "user",
          content: `1. [title] : Understand the """ separated [events] at the bottom and write the appropriate quotes.
          2. [summarize]: Analyze the event and write a verbal response in 3 lines or less.
          3. [content]: Write [content] in paragraphs based on the event content.
          If there is a request for a diet recommendation in the event content, please include a diet recommendation divided into breakfast, lunch, and dinner. 
          If there is a request for an exercise recommendation, please add the exercise part and the exercise method for the exercise part. 
          4. [3 action tips]: Write down 3 action tips that will help the customer in future situations. The 3 action tips must be converted to a JSON array.
          5. [image] : Summarize the content so far with keywords and create a cool image that will motivate them to work out.
          
          Translate all languages into Korean and use the output in the following JSON format
          {  
            title: here is [title]
            thumbnail: here is [image],
            summary: here is [summarize]
            content: here is [content],
            action_list: here is [3 action tips],
          }
          
          [events]:`,
        },
        {
          role: "user",
          content: `
            """
            ${prompt}
            """`,
        },
    ];

    const response = await  fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${process.env.REACT_APP_GPT_API_KEY}`
        },
        body :JSON.stringify ({
            "model": "gpt-3.5-turbo",
            messages,
            "temperature": 0.7,
            max_tokens: 1_000,
        }),
    })

    const responseData = await response.json();

    return responseData.choices[0].message.content;
}

export const CallGptAxios = async ({prompt}) => {
    const messages = [
        {
          role: "system",
          content: `## INFO ##
        you can add images to the reply by URL, Write the image in JSON field 
        Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##`,
        },
        {
          role: "system",
          content: `You're a fitness trainer and nutritionist with 10 years of experience helping people lose weight. Proceed in the following order.`,
        },
        {
          role: "user",
          content: `1. [title] : Understand the """ separated [events] at the bottom and write the appropriate quotes.
          2. [summarize]: Analyze the event and write a verbal response in 3 lines or less.
          3. [content]: Write [content] in paragraphs based on the event content.
          If there is a request for a diet recommendation in the event content, please include a diet recommendation divided into breakfast, lunch, and dinner. 
          If there is a request for an exercise recommendation, please add the exercise part and the exercise method for the exercise part. 
          4. [3 action tips]: Write down 3 action tips that will help the customer in future situations. The 3 action tips must be converted to a JSON array.
          5. [image] : Summarize the content so far with keywords and create a cool image that will motivate them to work out.
          
          Translate all languages into Korean and use the output in the following JSON format
          {  
            title: here is [title]
            thumbnail: here is [image],
            summary: here is [summarize]
            content: here is [content],
            action_list: here is [3 action tips],
          }
          
          [events]:`,
        },
        {
          role: "user",
          content: `
            """
            ${prompt}
            """`,
        },
    ]; 


    try{
        const response = await axios.post("https://api.openai.com/v1/chat/completions",
        {
            "model": "gpt-3.5-turbo",
            messages : [{
              role: "user",
              content: `${prompt}`,
            }],
            "temperature": 0.7,
            max_tokens: 1_000,
        },{
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${process.env.REACT_APP_GPT_API_KEY}` 
            }
        });

        const responseData = response.data;
        return responseData.choices[0].message.content;
    } catch(error){
        console.log(error);
    }

}