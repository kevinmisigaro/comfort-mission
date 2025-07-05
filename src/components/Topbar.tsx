function Topbar({
    text
}:{ text: string }) {
  return (
    <div className="text-white bg-[#531f59] text-center py-2 font-bold text-sm">
        {text}
    </div>
  )
}

export default Topbar