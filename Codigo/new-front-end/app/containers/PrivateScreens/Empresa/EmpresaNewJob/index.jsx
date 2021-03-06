import React, { useContext, useEffect, useState } from 'react'
import {
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { getEmpresa } from '../../../../API/EmpresaAPI'
import AppButton from '../../../../components/AppButton'
import AppNumericInput from '../../../../components/AppNumericInput'
import AppTextInput from '../../../../components/AppTextInput'
import { DispatchContext, StateContext } from '../../../../contexts'
import { createVaga } from '../../../../API/VagaAPI'
import ValidatedEmpresaNewJob from './ValidatedEmpresaNewJob'

export default function EmpresaNewJob({}) {
	const dispatch = useContext(DispatchContext)
	const state = useContext(StateContext)
	const { userData: empresa } = state

	function handleInvalidatedPress() {
		Alert.alert(
			'Perfil Inválidado',
			'Espere até o administrador validar este perfil para poder criar novas vagas e editar seu perfil.',
			[{ text: 'Ok' }]
		)
	}

	return empresa.eValido ? (
		<ValidatedEmpresaNewJob />
	) : (
		<View style={styles.container}>
			<Text style={styles.title}>Registro de Vaga</Text>
			<TouchableOpacity
				style={styles.invalidatedContainer}
				onPress={handleInvalidatedPress}
			>
				<Text style={styles.invalidatedMessage}>Perfil Invalidado</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	title: {
		textAlign: 'center',
		fontSize: 47,
		marginTop: 60,
		marginBottom: 30,
		color: '#009688'
	},
	invalidatedMessage: {
		fontSize: 22,
		color: 'red'
	},
	invalidatedContainer: {
		marginBottom: 10,
		marginTop: 10
	}
})
