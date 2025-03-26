package com.example.itplatform_ver1

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.fragment.app.Fragment

class ProfileFragment : Fragment() {
    private lateinit var txtName: TextView
    private lateinit var txtEmail: TextView
    private lateinit var txtSkills: TextView
    private lateinit var edtName: EditText
    private lateinit var edtEmail: EditText
    private lateinit var edtSkills: EditText
    private lateinit var btnEdit: Button
    private lateinit var btnSave: Button

    private var isEditing = false

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_profile, container, false)

        txtName = view.findViewById(R.id.txtName)
        txtEmail = view.findViewById(R.id.txtEmail)
        txtSkills = view.findViewById(R.id.txtSkills)

        edtName = view.findViewById(R.id.edtName)
        edtEmail = view.findViewById(R.id.edtEmail)
        edtSkills = view.findViewById(R.id.edtSkills)

        btnEdit = view.findViewById(R.id.btnEdit)
        btnSave = view.findViewById(R.id.btnSave)

        btnEdit.setOnClickListener {
            toggleEditMode(true)
        }

        btnSave.setOnClickListener {
            txtName.text = edtName.text.toString()
            txtEmail.text = edtEmail.text.toString()
            txtSkills.text = edtSkills.text.toString()
            toggleEditMode(false)
        }

        return view
    }

    private fun toggleEditMode(editing: Boolean) {
        isEditing = editing
        edtName.visibility = if (editing) View.VISIBLE else View.GONE
        edtEmail.visibility = if (editing) View.VISIBLE else View.GONE
        edtSkills.visibility = if (editing) View.VISIBLE else View.GONE

        txtName.visibility = if (editing) View.GONE else View.VISIBLE
        txtEmail.visibility = if (editing) View.GONE else View.VISIBLE
        txtSkills.visibility = if (editing) View.GONE else View.VISIBLE

        btnEdit.visibility = if (editing) View.GONE else View.VISIBLE
        btnSave.visibility = if (editing) View.VISIBLE else View.GONE
    }
}
