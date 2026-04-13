import ratelimit from "../conifg/upstash.js";

const ratelimiter = async (req,res,next) => {
    try {

        const {success} = await ratelimit.limit("my-limit-key");

        if(!success) {
            return res.status(429).json({message: "To many request!!!"});
        }

        next();

    } catch (error) {

        console.log("RateLimit Error occurs.", error);
        next(error);

    }
}

export default ratelimiter;