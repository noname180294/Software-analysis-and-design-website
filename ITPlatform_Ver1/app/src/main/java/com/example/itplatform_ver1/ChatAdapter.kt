package com.example.itplatform_ver1

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

data class Chat(
    val name: String,
    val lastMessage: String
)

class ChatAdapter(
    private val chats: List<Chat>,
    private val onClick: (String) -> Unit
) : RecyclerView.Adapter<ChatAdapter.ChatViewHolder>() {

    class ChatViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val name: TextView = view.findViewById(R.id.chatListName)
        val lastMessage: TextView = view.findViewById(R.id.chatListLastMessage)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ChatViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_chat, parent, false)
        return ChatViewHolder(view)
    }

    override fun onBindViewHolder(holder: ChatViewHolder, position: Int) {
        val chat = chats[position]
        holder.name.text = chat.name
        holder.lastMessage.text = chat.lastMessage
        holder.itemView.setOnClickListener { onClick(chat.name) }
    }

    override fun getItemCount(): Int = chats.size
}
