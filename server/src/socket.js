app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, { allowEIO3: true });

io.on("connection", (socket) => {
  console.log(socket.id);
  // socket.on("message", ({name, message})=>{
  //     console.log(message)
  //     io.emit("message", {})
  // })
  socket.on("joinRoom", async (data) => {
    try {
    } catch (error) {
      console.log(error);
    }
  });
});
