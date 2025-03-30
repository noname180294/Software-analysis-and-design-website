package com.example.itplatform_ver1

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ChatDetailAdapter(
    private val messages: List<Message>
) : RecyclerView.Adapter<ChatDetailAdapter.ChatDetailViewHolder>() {

    class ChatDetailViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val messageText: TextView = view.findViewById(R.id.messageText)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ChatDetailViewHolder {
        val layout = if (viewType == 1) R.layout.item_chat_detail_right else R.layout.item_chat_detail_left
        val view = LayoutInflater.from(parent.context).inflate(layout, parent, false)
        return ChatDetailViewHolder(view)
    }

    override fun onBindViewHolder(holder: ChatDetailViewHolder, position: Int) {
        holder.messageText.text = messages[position].content
    }

    override fun getItemCount(): Int = messages.size

    override fun getItemViewType(position: Int): Int {
        return if (messages[position].isSentByMe) 1 else 0
    }
}

data class Message(val content: String, val isSentByMe: Boolean)
